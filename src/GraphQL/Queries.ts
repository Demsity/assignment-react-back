let { useQuery, gql } = require('@apollo/client')


// Products
// Get all products
export const getProductsQuery = gql`{ products { _id, name, category, description, price, rating, tag, imageName}}`
// Get all products category
export const getCategorysQuery = gql`{ products { category } }`

// Get single product
export const getProductQuery = (id:string) =>  gql`{ product(_id: "${id}") { _id, name, category, description, price, rating, tag, imageName}}`

// Get products by tag
export const getProductsTagQuery = (tag:string) => gql`{ productsTag(tag: "${tag}") { _id, name, category, description, price, rating, tag, imageName}}`

// Get products by price
export const getProductsPriceQuery = (price:any) => gql`{ productsPrice(price: "${price}") { _id, name, category, description, price, rating, tag, imageName}}`


// Comments

export const getCommentsQuery = gql`{ comments { _id, name, email, comment}}`


// Users

export const getUsersQuery = gql`{ users { _id, name, email}}`