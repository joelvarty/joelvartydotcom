import Parser from 'html-react-parser';

const HTML = ({ item }) => {
    return Parser(item.customFields.hTML);
}

export default HTML;
