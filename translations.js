/**
Copy Central

Copy should adhere to the following format:

Category: Type of message
Location: Where its being used (page,sub-page,component)
Identifier: What does the message represent.

category: {
  location: {
    Identifier : message
  }
}
**/

export default {
  cartItems: 'You have {itemCount, plural,\n =0 {no items}\n one {1 item}\n other {{itemCount} items}\n }',
  components: {
    'app-footer': {
      FAQ: 'FAQ',
      emailSupport: 'Email Support After Hours',
      allRightsReserved: 'All rights reserved'
    },
    'bulk-credit-editor': {
      title: 'Edit Batch Photo Credit',
      description: 'Enter credit information to apply to all photos of this gallery.<br>This will override any existing photo credits.'
    },
    'category-picker': {
      requestError: 'We\’re having trouble with our category selector. Try reload'
    },
    'content-publisher': {
      warning: 'Warning: You’ll need to create a redirect if you change this slug. Contact your product manager or engineering team.'
    },
    'content-unpublisher': {
      unpublishRevision: 'You have chosen to unpublish a revision scheduled for <strong>{{date}}</strong>. You will not be able to get it back. Only this revision will be unpublished.',
      unpublish: 'When you unpublish you will remove all published and scheduled revisions of this item. It will also no longer be referenced in the below items.'
    },
    'create-media': {
      upload: 'Drag and drop here or'
    },
    'edit-asset-overlay': {
      hoverTextDefault: 'Click to Edit'
    },
    'global-uploader': {
      base: 'Upload to {{field}}',
      media: 'Copilot',
      gallery: 'Gallery',
      photosTout: 'Tout',
      photosLogo: 'Logo',
      imageSocial: 'Social Tout',
      photosLede: 'Lede',
      photosBadge: 'Badge',
      photosSocial: 'Social Tout',
      aspectRatio: '{{ratio}} crop',
      variantXsmall: 'Variant Xsmall',
      variantSmall: 'Variant Small',
      variantMedium: 'Variant Medium',
      variantLarge: 'Variant Large',
      variantXlarge: 'Variant Xlarge'
    },
    'dev-tools': {
      title: 'i18n Tools'
    },
    'product-search': {
      'find-product': 'Find Product'
    },
    'dialog-box': {
      close: 'Close'
    },
    'unlock-confirmation-dialog': {
      header: 'Confirm Takeover',
      body: '<p>Taking over this {{contentType}} will lock <strong>{{username}}</strong> out, and all of their unsaved changes will be lost.</p><p>Click confirm to continue.</p>',
      submit: 'Confirm'
    },
    'action-bar': {
      unpublish: 'Unpublish',
      publish: 'Publish',
      viewLive: 'View Live',
      preview: 'Preview',
      save: 'Save',
      cancel: 'Cancel',
      takeOver: 'Take Over Content',
      readOnly: 'You are viewing a read-only version because <span class="username">{{name}}</span> is editing'
    },
    'footer-bar': {
      add:'Add'
    },
    'main-nav': {
      buttons: {
        collapse: 'Copllapse',
        create: 'Create',
        dashboard:'Dashboard',
        logo: 'Copilot',
        search:'Search'
      },
      'extra-items': {
        runway: 'Runway'
      },
      currentUser: {
        logOut: 'Log Out',
        myProfile: 'My Profile',
        myTeam: 'My Team',
        siteSettings: 'Site Settings'
      },
      footer: {
        supportSite: 'Help',
        emailSupport: 'Email Support After Hours',
        copyright: '© {{year}} Condé Nast. All rights reserved'
      }
    }
  }
};