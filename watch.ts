import { serve } from "bun";
import {increment, getCounter} from "./counter";

serve({
    port:3000,
    fetch() {
        increment();
        return new Response(`Counter 3 : ${getCounter()}`);}
    }) 

console.log("listening on http://localhost:3000");
