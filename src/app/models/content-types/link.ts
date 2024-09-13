import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@7.3.0'
 *
 * Link
 * Id: df3675f7-045f-58cb-bc39-5ada1e4b0468
 * Codename: link
 */
export type Link = IContentItem<{
    /**
     * External URL (text)
     * Required: false
     * Id: a4cdc321-bf2a-5ce1-8a95-ef9f598e700c
     * Codename: external_url
     */
    externalUrl: Elements.TextElement;

    /**
     * Icon (asset)
     * Required: false
     * Id: ecbbe866-b71b-57b5-9363-178bb459dc78
     * Codename: icon
     */
    icon: Elements.AssetsElement;

    /**
     * Internal Link (modular_content)
     * Required: false
     * Id: 862662c6-f697-5ba6-9b51-91fefdecbaf4
     * Codename: internal_link
     *
     * Limit "Allowed content types" to types containing a URL Slug element.
     */
    internalLink: Elements.LinkedItemsElement<IContentItem>;

    /**
     * Label (text)
     * Required: false
     * Id: 753b3b6a-dc38-5813-b3a4-3f2d9c758090
     * Codename: label
     */
    label: Elements.TextElement;

    /**
     * Open in new window? (multiple_choice)
     * Required: false
     * Id: be957b03-43f5-583a-8750-44894b9312a2
     * Codename: open_in_new_window_
     */
    openInNewWindow: Elements.MultipleChoiceElement;
}>;
