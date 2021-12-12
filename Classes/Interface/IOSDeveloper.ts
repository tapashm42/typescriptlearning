
import { ApplicationDeveloper } from "./ApplicationDeveloper";

export class IOSDeveloper implements ApplicationDeveloper {
    getApplication(): string {
        return "iOS Application"
    }
}