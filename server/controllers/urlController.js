import {nanoid} from 'nanoid'
import Url from "../models/Url.js"
const baseUrl = process.env.BASE_URL

export const shortenUrl = async (req, res) => {
        console.log("hi");
        const { longUrl } = req.body;

        if (!longUrl)
                return res.status(400).json({ error: "URL required" });

        const shortCode = nanoid(6);

        try {
                let existing = await Url.findOne({ where: { longUrl } });

                if (existing)
                         res.json({ shortUrl: `${baseUrl}/${existing.shortCode}` });

                else{
                const url = await Url.create({ shortCode, longUrl });
                 res.json({ shortUrl: `${baseUrl}/${url.shortCode}` })
                }

        }
        catch (err) {
                console.log(err);
                res.json({ error: "server error" });
        }
};
export const redirect = async (req, res) => {
        const { shortCode } = req.params;

        if (!shortCode)
                return res.status(400).json({ error: "shortCode required" });

        

        try {
                let url = await Url.findOne({ where: { shortCode } });

                if (url){
                        // res.json({ shortenUrl: `${url.longUrl}` });
                         res.redirect(url.longUrl)
                
                }

                else
                return res.json({ error : "shortCode not found" })
        }
        catch (err) {
                console.log(err);
                res.json({ error: "server error" });
        }
}