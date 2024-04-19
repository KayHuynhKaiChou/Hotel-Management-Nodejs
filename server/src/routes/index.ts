import { Express , Request , Response} from "express"
import Amenity from "../models/amenity"

export const routes = (app : Express) => {
    app.get('/', async (req: Request , res: Response) => {
        await Amenity.sync({ alter : true})
        const amenity = await Amenity.create({
            title : "abcd"
        })
        await amenity.save();
        res.send('11++++.hoi.... '+amenity)
    })
}