/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      publishedOn
      title
      content
      summary
      comments {
        items {
          id
          postID
          content
          author
          createdAt
          updatedAt
        }
        nextToken
      }
      author
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      publishedOn
      title
      content
      summary
      comments {
        items {
          id
          postID
          content
          author
          createdAt
          updatedAt
        }
        nextToken
      }
      author
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      publishedOn
      title
      content
      summary
      comments {
        items {
          id
          postID
          content
          author
          createdAt
          updatedAt
        }
        nextToken
      }
      author
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      post {
        id
        publishedOn
        title
        content
        summary
        comments {
          nextToken
        }
        author
        createdAt
        updatedAt
      }
      content
      author
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      post {
        id
        publishedOn
        title
        content
        summary
        comments {
          nextToken
        }
        author
        createdAt
        updatedAt
      }
      content
      author
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      post {
        id
        publishedOn
        title
        content
        summary
        comments {
          nextToken
        }
        author
        createdAt
        updatedAt
      }
      content
      author
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
      id
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
      id
      name
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
      id
      name
      content
      createdAt
      updatedAt
    }
  }
`;
