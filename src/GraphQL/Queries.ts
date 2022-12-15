let { useQuery, gql } = require('@apollo/client')




export const getProductsQuery = gql`{ products { _id, name, category, description, price, rating, tag, imageName}}`
export const getCategorysQuery = gql`{ products { category } }`

export const getProductQuery = (id:string) =>  gql`{ product(_id: "${id}") { _id, name, category, description, price, rating, tag, imageName}}`

export const getProductsTagQuery = (tag:string) => gql`{ productsTag(tag: "${tag}") { _id, name, category, description, price, rating, tag, imageName}}`

export const getProductsPriceQuery = (price:any) => gql`{ productsPrice(price: "${price}") { _id, name, category, description, price, rating, tag, imageName}}`