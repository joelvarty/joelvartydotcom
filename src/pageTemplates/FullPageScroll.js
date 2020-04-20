import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const FullPageScrollTemplate = ({ page, dynamicPageItem }) => {

	const pluginWrapper = null;

	const name = "ScrollComponents";

	const modulesForThisContentZone = page.zones[name];

	if (modulesForThisContentZone === undefined) {
		const msg = `Cannot render modules for zone "${name}". This does not appear to be a valid content zone for this page template.`
		return (<div>{msg}</div>);
	}

	const modules = modulesForThisContentZone.map((moduleItem, index) => {
		if (moduleItem.item) {
			const moduleDefName = moduleItem.item.properties.definitionName;
			const ModuleComponentToRender = require(`../modules/${moduleDefName}.js`).default;
			const moduleProps = {
				key: moduleItem.item.contentID,
				dynamicPageItem: dynamicPageItem,
				item: moduleItem.item
			}

			if (ModuleComponentToRender) {
				return (
					<div key={`section-${moduleProps.key}`} className="section" id={"section-" + index}>
						<ModuleComponentToRender {...moduleProps} />
					</div>

				)
			} else {

				console.error(`No react component found for the module "${moduleDefName}". Cannot render module.`);
			}
		}

		return null;
	})

	const onLeave = function(e) {
		//TODO: implement this...
	}

	return (

		<div className="one-column-template">


			 <ReactFullpage

				// Required when using extensions
				pluginWrapper={pluginWrapper}

				// fullpage options
				licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
				navigation
				anchors={['about', 'writing', 'development']}
				//sectionSelector={SECTION_SEL}
				 onLeave={onLeave}
				// sectionsColor={this.state.sectionsColor}

				render={comp => (
					<ReactFullpage.Wrapper>
						{modules}
					</ReactFullpage.Wrapper>
				)}
			/>


		</div>
	);
}
export default FullPageScrollTemplate;
