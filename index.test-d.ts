import { expectType } from "tsd"
import urlExist from "./index.js"

expectType<Promise<boolean>>(urlExist("https://example.com"))
