let { gql } = require('@apollo/client')


// products 
export const postProductQuery  = gql
`
mutation AddProduct(
    $name: String!,
    $category: String!, 
    $description: String!, 
    $tag: String!, 
    $price: String!, 
    $rating: String!, 
    $imageName: String!
    ){
        addProduct(
            name: $name, 
            category: $category, 
            description: $description, 
            tag: $tag, 
            price: $price, 
            rating: $rating, 
            imageName: $imageName
            ) {
                name
    }
}
`



// comments
export const postCommentQuery = gql
`
mutation AddComment($name: String!, $email: String!, $comment: String!) {
    addComment(name: $name, email: $email, comment: $comment) {
        name
    }
}
`

export const removeCommentQuery = gql
`
mutation RemoveComment($_id: String!) {
    removeComment(_id: $_id, ) {
        name
    }
}
`


// users
export const removeUserQuery = gql
`
mutation RemoveUser($_id: String!) {
    removeUser(_id: $_id, ) {
        name
    }
}
`