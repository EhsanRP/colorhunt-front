import axios from "axios";

const BASE_URL = "https://colorhunt-equadesign.fandogh.cloud/api/v1/palettes"
const LOCAL_BASE_URL = "http://127.0.0.1:8080/api/v1/palettes"
const PAGE_SIZE = 20;

export const fetchPalettes = async (page) => {
    const uri = `${LOCAL_BASE_URL}/all`
    const response = await axios.get(uri, {params: {size: PAGE_SIZE, page: page},})
    return response.data
}

export const fetchAllPalettesById = async (idList) => {
    const baseURI = `${LOCAL_BASE_URL}/id`
    const ListURI = idList.map(id => `${baseURI}/${id}`)
    const response = await axios.all(ListURI.map(uri => axios.get(uri)))
    return response.map(res => res.data)
}

export const fetchPaletteById = async (id) => {
    const uri = `${LOCAL_BASE_URL}/id/${id}`
    const response = await axios.get(uri)
    return response.data
}

export const fetchPopular = async (page) => {
    const uri = `${LOCAL_BASE_URL}/popular`
    const response = await axios.get(uri, {params: {size: PAGE_SIZE, page: page}})
    return response.data
}

export const fetchRandom = async (page) => {
    const uri = `${LOCAL_BASE_URL}/random`
    const response = await axios.get(uri, {params: {size: PAGE_SIZE, page: page}})
    return response.data
}

export const fetchPalettesByCategoryId = async (categoryId, page) => {
    const uri = `${LOCAL_BASE_URL}/all/category/${categoryId}`
    const response = await axios.get(uri, {params: {size: PAGE_SIZE, page: page}})
    return response.data
}
//
// export const fetchFamiliar = async (id) => {
//     const uri = `${BASE_URL}/findFamiliar/${id}`
//     const response = await axios.get(uri)
//     return response.data
// }
// export const fetchRandom = async () => {
//     const uri = `${BASE_URL}/random`
//     const response = await axios.get(uri, {params: {pageSize: 30, pageNumber: 1}})
//     return response.data
// }
//
export const likePalette = async (id) => {
    const uri = `${LOCAL_BASE_URL}/like/${id}`
    return await axios.put(uri)

}

export const dislikePalette = async (id) => {
    const uri = `${LOCAL_BASE_URL}/dislike/${id}`
    const result = await axios.put(uri)
    return result
}
