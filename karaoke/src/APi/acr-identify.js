const { readFile } = require("fs/promises");
const acrcloud = require("acrcloud");
const formidable = require("formidable-serverless");

const acr = new acrcloud({
    host: "identify-eu-west-1.acrcloud.com",
    access_key: "d05eec94ef0928f7d843f1c3c0d1e88b",
    access_secret:"Xvgc8ktnhTHNWBo5sXUtpeA27Xclj0Yyn5AviIRy",
    data_type: "audio",
});

const form = formidable();

// Responde com um ISRC de música para uma amostra enviada
export default async function (req, res) {
    try {
        // Transforma form.parse em uma promessa para que os erros possam ser capturados com apenas um bloco try-catch
        const { files } = await new Promise((resolve, reject) =>
            form.parse(
                req,
                async (
                    err,
                    fields,
                    files
                ) => {
                    if (err) {
                        reject(err);
                    }

                    resolve({ fields, files });
                }
            )
        );

        const file = files.file;

        // Obtém os dados do arquivo enviado
        const fileData = await readFile(file.path);

        const data = await acr.identify(fileData);
        const metadata = data.metadata;

        if (data.status.code !== 0) {
            throw new Error(data.status.msg);
        }

        if (metadata.music?.length === 0) {
            throw new Error("Nenhuma música encontrada");
        }

        const music = metadata.music[0];

        res.status(200).json(music.external_ids.isrc);
    } catch (err) {
        res.status(500).send(err.message);
    }
}