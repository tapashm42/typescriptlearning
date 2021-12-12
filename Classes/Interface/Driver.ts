import { ApplicationDeveloper } from "./ApplicationDeveloper";
import { IOSDeveloper } from "./IOSDeveloper";
import { AndroidDeveloper} from "./AndroidDeveloper";

let iosdeveloper = new IOSDeveloper()
let androidDeveloper = new AndroidDeveloper()

let developers: ApplicationDeveloper[] = []

developers.push(iosdeveloper)
developers.push(androidDeveloper)

for (let developer of developers) {
    console.log(developer.getApplication())
}