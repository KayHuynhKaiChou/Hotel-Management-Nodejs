import { Express , Request , Response} from "express"

export const routes = (app : Express) => {
    app.get('/', (req: Request , res: Response) => {
        res.send('11+++++.......hoi....')
    })
}