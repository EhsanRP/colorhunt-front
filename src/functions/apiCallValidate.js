import axios from "axios";
import {logDOM} from "@testing-library/react";

export const validateGetMethod = (uri) => {

    let response = null
    do {
        response = axios.get(uri)
            .catch((error) => {

                return null
            })
    } while (response === null)

    return response
}