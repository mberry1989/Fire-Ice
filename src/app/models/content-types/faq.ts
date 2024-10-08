import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * FAQ
 * Id: ad9e2c61-ef3e-572e-979c-b923d3d22e61
 * Codename: faq
 */
export type FAQ = IContentItem<{
    /**
     * Answer (text)
     * Required: true
     * Id: e2137e55-c843-5a8b-97f1-cac37ccdf4f8
     * Codename: answer
     */
    answer: Elements.TextElement;

    /**
     * Question (text)
     * Required: true
     * Id: 7dce01fd-b8f4-5d18-8444-6f23a13320a8
     * Codename: question
     */
    question: Elements.TextElement;
}>;
