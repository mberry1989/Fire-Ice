import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * Chunk
 * Id: 42bbed2c-5f8c-4be4-befe-75a08d0fc996
 * Codename: chunk
 */
export type Chunk = IContentItem<{
    /**
     * Body (rich_text)
     * Required: false
     * Id: 4978de8c-1a1f-4ecf-a5c2-6d1cad589047
     * Codename: body
     */
    body: Elements.RichTextElement;

    /**
     * Image (asset)
     * Required: false
     * Id: 5d1139da-0d6b-4aa9-b2a7-866536d75440
     * Codename: image
     */
    image: Elements.AssetsElement;

    /**
     * Title (text)
     * Required: false
     * Id: c94ed50d-f824-4cb0-b45c-69e0b78745b2
     * Codename: title
     */
    title: Elements.TextElement;
}>;
