import { ApplicationDeveloper } from "./ApplicationDeveloper";

export class AndroidDeveloper implements ApplicationDeveloper {
    getApplication(): string {
        return "Android Application"
    }
}