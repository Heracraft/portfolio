import {writable} from "svelte/store"

export const colorTheme=writable("dark")
export const tilesDimension=writable({columnCount:0,rowCount:0})