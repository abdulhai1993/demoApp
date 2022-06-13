export const Config = {
    genericTooltip: {
        image: "Recommended dimensions of image are HXX x WXX",
        imageThumbnail: "Recommended dimensions of thumbnail are HXX x WXX",
        thumbnail: "Recommended dimensions of thumbnail are HXX x WXX",
        thumbnailImage: "Recommended dimensions of image are HXX x WXX"
    },
    pattern: {
        fName: {
            regex: null,
            tooltip: null,
            maxLength: 100
        },
        lName: {
            regex: null,
            tooltip: null,
            maxLength: 100
        },
        email: {
            // regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
            tooltip: 'Pattern e.g "example@test.com"',
            maxLength: 50
        },
        sapId: {
            // regex: /^(?=.*\d)(?=.*[a-zA-Z])([a-zA-Z0-9])+$/,
            // regex: /^([a-zA-Z0-9])+$/,
            // tooltip: 'Pattern e.g "AAaa11122"'
            regex: null,
            tooltip: null,
            maxLength: 50
        },
        password: {
            regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,20}$/,
            tooltip: 'Password should be min 8 digit , max 20 digit and combination of alphanumberic and specified special characters (!@#$%^&*_+) with 1 uppercase letter, 1 lowercase letter and  1 numeric character'
        },
        cnic: {
            regex: /^\(?([0-9]{5})\)?[-. ]?([0-9]{7})[-. ]?([0-9]{1})$/,
            tooltip: 'Pattern e.g "42101-1234567-7"',
            maxLength: 15
        },
        mobileNo: {
            // regex: /^\(?([0-9]{4})\)?[-. ]?([0-9]{7})$/,
            // tooltip: 'Pattern e.g "0347-1234567"',
            // maxLength: 12
            regex: null,
            tooltip: null,
            maxLength: 20
        },
        phoneNo: {
            // regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{8})$/,
            // tooltip: 'Pattern e.g "021-12345678"',
            // maxLength: 12
            regex: null,
            tooltip: null,
            maxLength: 20
        },
        website: {
            regex: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/,
            tooltip: "Eg. www.t.com || http://www.t.com || https://www.t.com",
            maxLength: 100
        },
        youtube: {
            regex: /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/,
            tooltip: "Eg. www.t.com || http://www.t.com || https://www.t.com",
            maxLength: 100
        },

        onlyAcceptNumber: {
            regex: /^[0-9]+$/,
            tooltip: 'Accept only number 0-9'
        },
        genericStringAllowed: {
            // ! , # , $ , % , & , * ( , )  "
            // regex: /^[A-Za-z\u00C0-\u00ff]+((-| |')[A-Za-z\u00C0-\u00ff]+)*$/,
            // regex: /[^a-zA-Z0-9\u0621-\u064A\u0660-\u0669-@._ ]/gm,
            // regex: /[a-zA-Z0-9\u0621-\u064A\u0660-\u0669-@!#$%&*()'"?,._ ]+$/,
            regex: /^[a-zA-Z0-9\u0621-\u064A\u0660-\u0669-@!#$%&*()'"?,._ ]+$/,
            tooltip: null,
            maxLength: 50
        },
        genericSearchStringAllowed: {
            // $-_.+!*'()
            // regex: /^[A-Za-z\u00C0-\u00ff]+((-| |')[A-Za-z\u00C0-\u00ff]+)*$/,
            // regex: /[^a-zA-Z0-9\u0621-\u064A\u0660-\u0669-@._ ]/gm,
            regex: /^[a-zA-Z0-9\u0621-\u064A\u0660-\u0669-@!*',._ ]+$/,
            tooltip: null,
            maxLength: 50
        },
        genericOne: {
            // regex: /^[A-Za-z\u00C0-\u00ff]+((-| |')[A-Za-z\u00C0-\u00ff]+)*$/,
            regex: /[^a-zA-Z0-9\u0621-\u064A\u0660-\u0669-@._ ]/gm,
            tooltip: null,
            maxLength: 50
        },
        genericTwo: {
            regex: /^[A-Za-z\u00C0-\u00ff]+([0-9][A-Za-z\u00C0-\u00ff]*)?((-| |')*[A-Za-z0-9\u00C0-\u00ff]+)*$/,
            tooltip: null,
            maxLength: 100
        },
        genericThree: {
            regex: /[^a-zA-Z0-9-@._ ]/g,
            tooltip: null,
            maxLength: 500
        },
        genericFour: {
            regex: null,
            tooltip: null,
            maxLength: 1000
        },
        genericFive: {
            regex: null,
            tooltip: null,
            maxLength: 4000
        }
    },
    ngxEditorConfig: {
        "editable": true,
        "spellcheck": true,
        "charCounterMax": 5000,
        "maxlength": "12",
        "height": "auto",
        "minHeight": "10",
        "width": "auto",
        "minWidth": "0",
        "translate": "yes",
        "enableToolbar": true,
        "showToolbar": true,
        "placeholder": "Enter text here...",
        "imageEndPoint": "",
        "toolbar": [
            ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
            // ["fontName", "fontSize", "color"],
            // ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
            ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
            ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
            // ["link", "unlink", "image", "video"]
        ]
    },
    iconTypeList: [
        {
            id: 1,
            name: "Custom Icon",
            code: "custom-icon",
            fontFamily: "BTF-Icon-Fonts",
            prefix: "none"
        },
        {
            id: 2,
            name: "FA Solid Icon",
            code: "fa-solid-icon",
            fontFamily: "FontAwesomeSolid",
            prefix: "fas"
        },
        {
            id: 3,
            name: "FA Regular Icon",
            code: "fa-regular-icon",
            fontFamily: "FontAwesomeRegular",
            prefix: "far"
        },
        {
            id: 4,
            name: "FA Brand Icon",
            code: "fa-brand-icon",
            fontFamily: "FontAwesomeBrands",
            prefix: "fab"
        }
    ],
    icons: [
        // {
        //     id: 1,
        //     name: "Assignment Late",
        //     code: "assignment_late"
        //     type: "custom-icon",
        //     prefix: "none"
        // },
        // {
        //     id: 2,
        //     name: "Calendar Today",
        //     code: "calendar_today"
        //     type: "custom-icon",
        //     prefix: "none"
        // },
        // {
        //     id: 3,
        //     name: "Check Circle",
        //     code: "check_circle"
        //     type: "custom-icon",
        //     prefix: "none"
        // }
        {
            id: 1,
            name: "About-Us",
            code: "icon-About-Us",
            type: "custom-icon",
            uniCode: "e900",
            prefix: "none"
        },
        {
            id: 2,
            name: "Advocacy-Day",
            code: "icon-Advocacy-Day",
            type: "custom-icon",
            uniCode: "e901",
            prefix: "none"
        },
        {
            id: 3,
            name: "Ambassador",
            code: "icon-Ambassador",
            type: "custom-icon",
            uniCode: "e902",
            prefix: "none"
        },
        {
            id: 4,
            name: "Call-Un",
            code: "icon-Call-Un",
            type: "custom-icon",
            uniCode: "e903",
            prefix: "none"
        },
        {
            id: 5,
            name: "Connect",
            code: "icon-Connect",
            type: "custom-icon",
            uniCode: "e904",
            prefix: "none"
        },
        {
            id: 6,
            name: "Donate",
            code: "icon-Donate",
            type: "custom-icon",
            uniCode: "e905",
            prefix: "none"
        },
        {
            id: 7,
            name: "Event",
            code: "icon-Event",
            type: "custom-icon",
            uniCode: "e906",
            prefix: "none"
        },
        {
            id: 8,
            name: "Genocide",
            code: "icon-genocide",
            type: "custom-icon",
            uniCode: "e907",
            prefix: "none"
        },
        {
            id: 9,
            name: "Get-in-touch",
            code: "icon-Get-in-touch",
            type: "custom-icon",
            uniCode: "e908",
            prefix: "none"
        },
        {
            id: 10,
            name: "Host",
            code: "icon-Host",
            type: "custom-icon",
            uniCode: "e909",
            prefix: "none"
        },
        {
            id: 11,
            name: "Infographics",
            code: "icon-Infographics",
            type: "custom-icon",
            uniCode: "e90a",
            prefix: "none"
        },
        {
            id: 12,
            name: "Join",
            code: "icon-Join",
            type: "custom-icon",
            uniCode: "e90b",
            prefix: "none"
        },
        {
            id: 13,
            name: "News",
            code: "icon-News",
            type: "custom-icon",
            uniCode: "e90d",
            prefix: "none"
        },
        {
            id: 14,
            name: "Printable",
            code: "icon-Printable",
            type: "custom-icon",
            uniCode: "e90e",
            prefix: "none"
        },
        {
            id: 15,
            name: "Resource",
            code: "icon-Resource",
            type: "custom-icon",
            uniCode: "e910",
            prefix: "none"
        },
        {
            id: 16,
            name: "Rohingya-101",
            code: "icon-Rohingya-101",
            type: "custom-icon",
            uniCode: "e911",
            prefix: "none"
        },
        {
            id: 17,
            name: "Rohingya-Demand",
            code: "icon-Rohingya-Demand",
            type: "custom-icon",
            uniCode: "e912",
            prefix: "none"
        },
        {
            id: 18,
            name: "Rohingya-Image",
            code: "icon-Rohingya-Image",
            type: "custom-icon",
            uniCode: "e913",
            prefix: "none"
        },
        {
            id: 19,
            name: "Shareable",
            code: "icon-Shareable",
            type: "custom-icon",
            uniCode: "e914",
            prefix: "none"
        },
        {
            id: 20,
            name: "Speaker",
            code: "icon-Speaker",
            type: "custom-icon",
            uniCode: "e915",
            prefix: "none"
        },
        {
            id: 21,
            name: "Take-Action",
            code: "icon-Take-Action",
            type: "custom-icon",
            uniCode: "e916",
            prefix: "none"
        },
        {
            id: 22,
            name: "Tracking",
            code: "icon-Tracking",
            type: "custom-icon",
            uniCode: "e917",
            prefix: "none"
        },

    ],
    bannerColors: [
        {
            id: 1,
            name: "Red",
            code: "#ff0000"
            // code: "red"
        },
        {
            id: 2,
            name: "Green",
            code: "#008000"
            // code: "green"
        },
        {
            id: 3,
            name: "Blue",
            code: "#0000ff"
        }

    ],
    bannerFeatures: [
        {
            id: 0,
            code: "not_used",
            name: "Not Used",
        },
        {
            id: 1,
            code: "top_banner",
            name: "Top Banner",
        },
        {
            id: 2,
            code: "bottom_banner",
            name: "Bottom Banner",
        }
    ],
    userListStatuses: {
        active: {
            name: "active",
            code: "active"
        },
        blocked: {
            name: "blocked",
            code: "inactive"
        }
    },
    userActionStatuses: {
        approve: {
            id: 1,
            name: "approve",
            code: "approve",
        },
        reject: {
            id: 2,
            name: "reject",
            code: "reject",
        },
        block: {
            id: 3,
            name: "block",
            code: false,
        },
        revoke: {
            id: 4,
            name: "revoke",
            code: "revoke",
        },
        unblock: {
            id: 5,
            name: "unblock",
            code: true,
        }

    },
    demoPageList: [
        {
            id: 1,
            pageName: "News",
            pageType: "News",
            status: "Draft"
        },
        {
            id: 2,
            pageName: "Documentries",
            pageType: "News and Media",
            status: "Published"
        },
        {
            id: 3,
            pageName: "About Us",
            pageType: "Blog",
            status: "Draft"
        },
        {
            id: 4,
            pageName: "Videos",
            pageType: "Videos",
            status: "Draft"
        },
        {
            id: 5,
            pageName: "Join",
            pageType: "Form",
            status: "Published"
        },
        {
            id: 6,
            pageName: "Signup for News Letter",
            pageType: "Form",
            status: "Published"
        }
    ],
    demoScreens: [
        {
            id: 1,
            pageLayoutId: 1,
            pageLayoutName: "News and Media",
            pageLayoutCode: "L-001",
            pageLayoutUrl: "assets/demo/layout/L-001.png",
        },
        {
            id: 2,
            pageLayoutId: 2,
            pageLayoutName: "Blog",
            pageLayoutCode: "L-002",
            pageLayoutUrl: "assets/demo/layout/L-002.png",
        },
        {
            id: 3,
            pageLayoutId: 3,
            pageLayoutName: "Gallery",
            pageLayoutCode: "L-003",
            pageLayoutUrl: "assets/demo/layout/L-003.png",
        },
        {
            id: 4,
            pageLayoutId: 4,
            pageLayoutName: "Info Graphics",
            pageLayoutCode: "L-004",
            pageLayoutUrl: "assets/demo/layout/L-004.png",
        },
        {
            id: 5,
            pageLayoutId: 5,
            pageLayoutName: "Vidoes",
            pageLayoutCode: "L-005",
            pageLayoutUrl: "assets/demo/layout/L-005.png",
        },
        {
            id: 6,
            pageLayoutId: 6,
            pageLayoutName: "FAQ",
            pageLayoutCode: "L-006",
            pageLayoutUrl: "assets/demo/layout/L-006.png",
        },
        {
            id: 7,
            pageLayoutId: 7,
            pageLayoutName: "Events and Rallies",
            pageLayoutCode: "L-007",
            pageLayoutUrl: "assets/demo/layout/L-007.png",
        },
        {
            id: 8,
            pageLayoutId: 8,
            pageLayoutName: "Printables/Downloadables",
            pageLayoutCode: "L-008",
            pageLayoutUrl: "assets/demo/layout/L-008.png",
        },
        {
            id: 26,
            pageLayoutId: 26,
            pageLayoutName: "Documentaries",
            pageLayoutCode: "L-009",
            pageLayoutUrl: "assets/demo/layout/L-009.png",
        },
        {
            id: 27,
            pageLayoutId: 27,
            pageLayoutName: "Press Releases",
            pageLayoutCode: "L-010",
            pageLayoutUrl: "assets/demo/layout/L-010.png",
        }
    ],
    fixScreens: [
        {
            id: 9,
            pageLayoutId: 9,
            pageLayoutName: "Track your hours",
            pageLayoutCode: "F-001",
            pageLayoutUrl: "assets/demo/layout/F-001.png",
        },
        {
            id: 10,
            pageLayoutId: 10,
            pageLayoutName: "Sign organization letter",
            pageLayoutCode: "F-002",
            pageLayoutUrl: "assets/demo/layout/F-002.png",
        },
        {
            id: 11,
            pageLayoutId: 11,
            pageLayoutName: "Sign Petition",
            pageLayoutCode: "F-003",
            pageLayoutUrl: "assets/demo/layout/F-003.png",
        },
        {
            id: 12,
            pageLayoutId: 12,
            pageLayoutName: "Host an event",
            pageLayoutCode: "F-004",
            pageLayoutUrl: "assets/demo/layout/F-004.png",
        },
        {
            id: 13,
            pageLayoutId: 13,
            pageLayoutName: "Order Booklets and pamphlets",
            pageLayoutCode: "F-005",
            pageLayoutUrl: "assets/demo/layout/F-005.png",
        },
        {
            id: 14,
            pageLayoutId: 14,
            pageLayoutName: "Users event",
            pageLayoutCode: "F-006",
            pageLayoutUrl: "assets/demo/layout/F-006.png",
        },
        {
            id: 15,
            pageLayoutId: 15,
            pageLayoutName: "Signup for newsletter",
            pageLayoutCode: "F-007",
            pageLayoutUrl: "assets/demo/layout/F-007.png",
        },
        {
            id: 16,
            pageLayoutId: 16,
            pageLayoutName: "Users Organization",
            pageLayoutCode: "F-008",
            pageLayoutUrl: "assets/demo/layout/F-008.png",
        },
        {
            id: 17,
            pageLayoutId: 17,
            pageLayoutName: "Signup for advocacy days",
            pageLayoutCode: "F-009",
            pageLayoutUrl: "assets/demo/layout/F-009.png",
        },
        {
            id: 18,
            pageLayoutId: 18,
            pageLayoutName: "Setup panel discussion on your campus",
            pageLayoutCode: "F-010",
            pageLayoutUrl: "assets/demo/layout/F-010.png",
        },
        {
            id: 19,
            pageLayoutId: 19,
            pageLayoutName: "invite us to speak at your event",
            pageLayoutCode: "F-011",
            pageLayoutUrl: "assets/demo/layout/F-011.png",
        },
        {
            id: 20,
            pageLayoutId: 20,
            pageLayoutName: "Host a fundraiser",
            pageLayoutCode: "F-012",
            pageLayoutUrl: "assets/demo/layout/F-012.png",
        },
        {
            id: 21,
            pageLayoutId: 21,
            pageLayoutName: "Donations",
            pageLayoutCode: "F-013",
            pageLayoutUrl: "assets/demo/layout/F-013.png",
        },
        {
            id: 22,
            pageLayoutId: 22,
            pageLayoutName: "Facebook Feeds",
            pageLayoutCode: "F-014",
            pageLayoutUrl: "assets/demo/layout/F-014.png",
        },
        {
            id: 23,
            pageLayoutId: 23,
            pageLayoutName: "Twitter Feeds",
            pageLayoutCode: "F-015",
            pageLayoutUrl: "assets/demo/layout/F-015.png",
        },
        {
            id: 24,
            pageLayoutId: 24,
            pageLayoutName: "Refuges Map",
            pageLayoutCode: "F-016",
            pageLayoutUrl: "assets/demo/layout/F-016.png",
        },
        {
            id: 25,
            pageLayoutId: 25,
            pageLayoutName: "Take Action Page",
            pageLayoutCode: "F-017",
            pageLayoutUrl: "assets/demo/layout/F-017.png",
        },
        {
            id: 28,
            pageLayoutId: 28,
            pageLayoutName: "Advocacy Day Feedback",
            pageLayoutCode: "F-018",
            pageLayoutUrl: "assets/demo/layout/F-018.png",
        }
    ],
    timeType: [
        {
            id: 1,
            name: "Second",
            code: "sec",
        },
        {
            id: 2,
            name: "Minute",
            code: "min",
        },
        // {
        //     id: 3,
        //     name: "Hour",
        //     code: "hour",
        // }

    ],
    timeTypeVo: [
        {
            id: 1,
            name: "Minute",
            code: "min",
        },
        {
            id: 2,
            name: "Hour",
            code: "hour",
        }

    ],
    days: [
        {
            id: 1,
            name: "Monday",
            code: "monday",
        },
        {
            id: 2,
            name: "Tuesday",
            code: "tuesday",
        },
        {
            id: 3,
            name: "Wednesday",
            code: "wednesday",
        },
        {
            id: 4,
            name: "Thursday",
            code: "thursday",
        },
        {
            id: 5,
            name: "Friday",
            code: "friday",
        },
        {
            id: 6,
            name: "Saturday",
            code: "saturday",
        },
        {
            id: 7,
            name: "Sunday",
            code: "sunday",
        }
    ],
    expertise: {
        min: 1,
        max: 50
    },
    gallaryImages: {
        min: 1,
        max: 50
    },
    faqs: {
        min: 1,
        max: 50
    },
    msg: {
        permissionPop: "Sorry, You dont have permission",
        permission: "Dont have permission"
    },
    allowedUploadSizeInByte: {
        generic: 5000000,     // 5mb
        image: 5000000,     // 5mb
        doc: 10000000,      // 10mb
        video: 10000000     // 10mb
    },
    dimensionCheck: {
        image: false,
        causeLogo: false,
        causeBanner: true,
        scrollingItem: true,
    },
    allowedGenericImageDimension: {
        minWidth: 0,
        maxWidth: 400,
        minHeight: 0,
        maxHeight: 225
    },
    allowedGenericThumbnailDimension: {
        minWidth: 0,
        maxWidth: 80,
        minHeight: 0,
        maxHeight: 55
    },
    allowedCauseLogoDimension: {
        minWidth: 0,
        maxWidth: 80,
        minHeight: 0,
        maxHeight: 40
    },
    allowedCauseBannerDimension: {
        minWidth: 0,
        maxWidth: 200,
        minHeight: 0,
        maxHeight: 110
    },
    allowedScrollingItemImageDimension: {
        minWidth: 0,
        maxWidth: 180,
        minHeight: 0,
        maxHeight: 100
    },
    allowedImageExt: [
        {
            id: 1,
            name: "Jpg",
            ext: ".jpg"
        },
        {
            id: 2,
            name: "Jpeg",
            ext: ".jpeg"
        },
        {
            id: 3,
            name: "Png",
            ext: ".png"
        },
        {
            id: 4,
            name: "Gif",
            ext: ".gif"
        },
        {
            id: 5,
            name: "Svg",
            ext: ".svg"
        },
        // {
        //     id: 5,
        //     name: "Tif",
        //     ext: ".tif"
        // },
        // {
        //     id: 6,
        //     name: "Tiff",
        //     ext: ".tiff"
        // }
    ],
    allowedImageType: [
        {
            id: 1,
            name: "image/jpeg",
            type: "image/jpeg"
        },
        {
            id: 2,
            name: "image/png",
            type: "image/png"
        },
        {
            id: 3,
            name: "image/gif",
            type: "image/gif"
        },
        {
            id: 4,
            name: "image/svg+xml",
            type: "image/svg+xml"
        },
        // {
        //     id: 5,
        //     name: "image/tiff",
        //     type: "image/tiff"
        // }
    ],
    allowedDocExt: [
        {
            id: 1,
            name: "PDF",
            ext: ".pdf"
        },
        {
            id: 2,
            name: "Xlsx",
            ext: ".xlsx"
        },
        {
            id: 3,
            name: "Xls",
            ext: ".xls"
        },
        {
            id: 4,
            name: "Xlsb",
            ext: ".xlsb"
        },
        {
            id: 5,
            name: "Xlsm",
            ext: ".xlsm"
        },
        {
            id: 6,
            name: "Doc",
            ext: ".doc"
        },
        {
            id: 7,
            name: "Docx",
            ext: ".docx"
        },
        {
            id: 8,
            name: "Docs",
            ext: ".docs"
        },
        {
            id: 9,
            name: "Txt",
            ext: ".txt"
        }
    ],
    allowedDocType: [
        {
            id: 1,
            name: "application/pdf",
            type: "application/pdf"
        },
        {
            id: 2,
            name: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        },
        {
            id: 3,
            name: "application/vnd.ms-excel",
            type: "application/vnd.ms-excel"
        },
        {
            id: 4,
            name: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
            type: "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
        },
        {
            id: 5,
            name: "application/vnd.ms-excel.sheet.macroEnabled.12",
            type: "application/vnd.ms-excel.sheet.macroEnabled.12"
        },
        {
            id: 6,
            name: "application/msword",
            type: "application/msword"
        },
        {
            id: 7,
            name: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        },
        {
            id: 8,
            name: "text/plain",
            type: "text/plain"
        },
    ],
    allowedVideoExt: [
        {
            id: 1,
            name: "MP4",
            ext: ".mp4"
        },
        {
            id: 2,
            name: "MOV",
            ext: ".mov"
        },
        {
            id: 3,
            name: "FLV",
            ext: ".flv"
        }
        // {
        //     id: 4,
        //     name: "3gp",
        //     ext: ".3gp"
        // },
        // {
        //     id: 5,
        //     name: "ts",
        //     ext: ".ts"
        // },
    ],
    allowedVideoType: [
        {
            id: 1,
            name: "video/mp4",
            type: "video/mp4"
        },
        {
            id: 2,
            name: "video/quicktime",
            type: "video/quicktime"
        },
        {
            id: 3,
            name: "video/x-flv",
            type: "video/x-flv"
        }
        // {
        //     id: 4,
        //     name: "video/3gpp",
        //     type: "video/3gpp"
        // },
        // {
        //     id: 5,
        //     name: "video/MP2T",
        //     type: "video/MP2T"
        // }
    ],
    graphVisualizationList: [
        {
            id: 1,
            name: "General Visualization",
            value: 0
        },
        {
            id: 2,
            name: "By Products",
            value: 2
        },
        {
            id: 3,
            name: "By Countries",
            value: 1
        }
    ],
    graphVisualizationObjectList: {
        "General visualization": 0,
        "By Countries": 1,
        "By Products": 2
    }

};
