/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const crypto = require(`crypto`);

const digest = data => {
    return crypto
        .createHash(`md5`)
        .update(JSON.stringify(data))
        .digest(`hex`);
};

exports.onCreateNode = ({ node, boundActionCreators }) => {
    const { createNode } = boundActionCreators;
    if (node.internal.type === "StrapiArticle") {
        createNode({
            ...node,
            id: node.id + "-markdown",
            parent: node.id,
            children: [],
            internal: {
                type: "article",
                mediaType: "text/markdown",
                content: node.content,
                contentDigest: digest(node)
            }
        });
    }
};