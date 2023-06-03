const axios = require("axios");

const BASE_URL = "https://api.musixmatch.com/ws/1.1/";

const baseParams = {
    apikey: process.env.MUSIXMATCH_API_KEY,
    format: "json",
};

// Encontre a letra de uma música com base no seu ISRC
export default async function (req, res) {
    try {
        const { isrc } = req.query;

        if (!isrc) {
            res.status(400).send("ISRC da música é obrigatório");
            return;
        }

        let response = await axios.get(BASE_URL , {
            params: {
                ...baseParams,
                track_isrc: isrc,
            },
        });

        const track = response.data.message.body.track;

        response = await axios.get(BASE_URL , {
            params: {
                ...baseParams,
                track_id: track.track_id,
            },
        });

        const lyrics = response.data.message.body.lyrics.lyrics_body;
        const title = `${track.track_name} por ${track.artist_name}`;

        res.status(200).json({ title, lyrics });
    } catch (err) {
        res.status(500).send(err.message);
    }
}