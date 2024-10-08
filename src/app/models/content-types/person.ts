import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * Person
 * Id: d43f8c15-16cd-5732-b2f7-2023997187fc
 * Codename: person
 */
export type Person = IContentItem<{
    /**
     * First Name (text)
     * Required: true
     * Id: 75123355-ea53-5577-9c1a-36d3747bc70d
     * Codename: first_name
     */
    firstName: Elements.TextElement;

    /**
     * Image (asset)
     * Required: false
     * Id: 891ea65d-96ab-5530-a363-0cb6109554f2
     * Codename: image
     */
    image: Elements.AssetsElement;

    /**
     * Job Title (text)
     * Required: false
     * Id: e63e755f-29ce-5c45-9289-365bd7e47adf
     * Codename: job_title
     */
    jobTitle: Elements.TextElement;

    /**
     * Last Name (text)
     * Required: true
     * Id: 7cf10c8c-a512-5610-ae33-31031ab78cde
     * Codename: last_name
     */
    lastName: Elements.TextElement;

    /**
     * Prefix (text)
     * Required: false
     * Id: a4308aff-84ae-5d96-9f1f-5010be8a5278
     * Codename: prefix
     */
    prefix: Elements.TextElement;
}>;
