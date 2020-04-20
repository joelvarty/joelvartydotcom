import React from 'react';
import './PostDetails.scss'
const ReactMarkdown = require('react-markdown')

const PostDetails = ({ item, dynamicPageItem }) => {
	const post = dynamicPageItem;
	const renderHTML = (html) => {
		return { __html: html };
	}
	return (

		<section className="post-details">

			<div class="container max-w-5xl mx-auto -mt-32">

				<div class="mx-0 sm:mx-6">

					<div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" >


							<h1>{post.customFields.title}</h1>
							{post.customFields.image &&
								<img src={post.customFields.image.url + '?w=860'} alt="" />
							}
							<hr />
							<div className="post-content" dangerouslySetInnerHTML={renderHTML(post.customFields.textblob)}></div>
							<ReactMarkdown source={post.customFields.markdown} />

						</div>
					</div>
				</div>

		</section>
	);
}
export default PostDetails;
