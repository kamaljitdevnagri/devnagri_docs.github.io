# Devnagri Platform APIs

## Login API

This API enables client to login

> `POST: https://app.devnagri.com/api/login`

### Request

```json
{
    "email": "test.client@devnagri.com",
    "password": "****"
}
```

### Response

```json
{
    "token": "asdiasdoiasdubdebdsbdaysbduaysbduaysbd"
}
```

## Generate API Token

> `POST https://app.devnagri.com/api/key/validations`

### Request

```json
{
    "client_id": "id-of-client",
    "client_secret": "client-secret",
    "project_key": "project-key"
}
```

### Response

```json
{
    "token": "Your-token"
}
```

Put this token in all headers while sending the request to devnagri.

Example:

```txt
Accept: 'Application/json'
Authorization: 'bearer your-token-here'
```

------------------------

## Get all languages

Get all languages that we are using

> `POST: https://dev.devnagri.co.in/api/all-languages`

Response

```json
[
    {
        "name": "Hindi - हिंदी",
        "code": "hi",
        "id": 1
    },
    {
        "name": "Punjabi - ਪੰਜਾਬੀ",
        "code": "pa",
        "id": 2
    }
]
```

------------------------

## Get all tags

This api provides all tags that is being used in devnagri.

> `POST: https://app.devnagri.com/api/tags`

Response

```json
[
    {
        "id": 1,
        "name": "Android App",
        "slug": "Android App",
        "group": "project_type"
    },
    {
        "id": 2,
        "name": "Website",
        "slug": "Website",
        "group": "project_type"
    },
   {
        "id": 36,
        "name": "Not Specified",
        "slug": "not-specified",
        "group": "target_audience"
    },
    {
        "id": 37,
        "name": "Children (<13 yrs)",
        "slug": "children-13-yrs",
        "group": "target_audience"
    },
    {
        "id": 41,
        "name": "Seniors (60+ yrs)",
        "slug": "seniors-60-yrs",
        "group": "target_audience"
    },
    {
        "id": 42,
        "name": "Not Specified",
        "slug": "not-specified",
        "group": "level_of_politeness"
    },
    {
        "id": 50,
        "name": "Third Person - Plural (they)",
        "slug": "third-person-plural-they",
        "group": "level_of_politeness"
    }
]

```

------------------------

## Project related APIs

### Get available languages in project

Get available languages in project.

Request:
> `POST: https://app.devnagri.com/api/projects/{project_id}/available-languages`

Response:

```json

[
    {
        "id": 4,
        "code": "gu",
        "name": "Gujarati - ગુજરાતી"
    },
    {
        "id": 5,
        "code": "kn",
        "name": "Kannada - ಕನ್ನಡ"
    }
]

```

------------------------

### Get project status

Get status of project.

Request:
> `POST: https://app.devnagri.com/api/projects/{project_id}/project-status`

Response:

```json
{
    "totalWords": 0,
    "pendingWords": 0,
    "translatedWords": 0,
    "reviewedWords": 0,
    "reviewedWordsProgress": 0,
    "translatedWordsProgress": 0,
    "pendingWordsProgress": 0
}
```

------------------------

### Get orders in project

List all the orders in project

Request:
> `POST: https://app.devnagri.com/api/projects/{project_id}/project-orders`

Response:

```json
{
    "orders": [
        {
            "id": 1,
            "fileCount": 1,
            "languages": [
                "Hindi - हिंदी",
                "Punjabi - ਪੰਜਾਬੀ"
            ],
            "proofreading": 0,
            "code": "vLjpPD16",
            "deadline": "5 hours from now",
            "status": "unassigned",
            "created_at": {
                "date": "2018-07-02 17:32:36.000000",
                "timezone_type": 3,
                "timezone": "Asia/Kolkata"
            },
            "totalWords": 24,
            "pendingWords": 24,
            "translatedWords": 0,
            "reviewedWords": 0,
            "reviewedWordsProgress": "0.00",
            "translatedWordsProgress": "0.00",
            "pendingWordsProgress": "100.00",
            "updated": "3 minutes ago"
        }
    ],
    "automatedOrders": [
        {
            "fileCount": 1,
            "languages": [
                "Hindi - हिंदी",
                "Punjabi - ਪੰਜਾਬੀ"
            ],
            "code": "DmANGVa",
            "status": "unassigned",
            "created_at": {
                "date": "2018-07-02 17:33:11.000000",
                "timezone_type": 3,
                "timezone": "Asia/Kolkata"
            },
            "updated": "2 minutes ago"
        }
    ]
}
```

### Get all languages in project

Request:
> `POST: https://app.devnagri.com/api/projects/{project_id}/project-languages`

Response:

```json
[
    {
        "id": 1,
        "name": "Hindi - हिंदी",
        "code": "hi",
        "translatedWordsCount": 0,
        "reviewedWordsCount": 0,
        "totalWordsCount": 31,
        "pendingWordsCount": 31,
        "reviewedWordsProgress": "0.00",
        "translatedWordsProgress": "0.00",
        "pendingWordsProgress": "100.00",
    },
    {
        "id": 2,
        "name": "Punjabi - ਪੰਜਾਬੀ",
        "code": "pa",
        "translatedWordsCount": 0,
        "reviewedWordsCount": 0,
        "totalWordsCount": 31,
        "pendingWordsCount": 31,
        "reviewedWordsProgress": "0.00",
        "translatedWordsProgress": "0.00",
        "pendingWordsProgress": "100.00",
    }
]

```

### Add new language in project

Request: Url
> `POST: https://app.devnagri.com/api/projects/{project_id}/project-add-language`

Parameters:

```json
{
    "languages": "id-of-language"
}
```

Response:

```json
{
    "status": 200
}

```

### Get all glossaries in project

Request:
> `POST: https://app.devnagri.com/api/projects/{project_id}/project-glossary`

Response:

```json
[
    {
        "id": 1,
        "term": "Kilometers",
        "project_id": "1",
        "description": "a",
        "translatable": 0,
        "created_by": 1,
        "created_at": "2018-07-02 17:54:40",
        "updated_at": "2018-07-02 17:54:40",
        "deleted_at": null
    }
]
```

### To get all files in project

Request:
> `POST: https://app.devnagri.com/api/projects/{project_id}/order-files`

Response:

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "project_id": 1,
            "code": "bfd2d1b2-7def-11e8-9d97-0242ac170006",
            "name": "cipher.xml",
            "location": "projects/ad817108-7def-11e8-ba3a-0242ac170006/bfd2b59c-7def-11e8-9d54-0242ac170006.xml",
            "type": "xml",
            "format": "xml",
            "meta_information": "{\"original_location\":null}",
            "status": 1,
            "deleted_at": null,
            "created_at": "2018-07-02 17:32:10",
            "previous_id": null,
            "deletable": false,
            "totalWordsCount": 31,
            "translatedWordsCount": 0,
            "reviewedWordsCount": 0,
            "pendingWordsCount": 31,
            "reviewedWordsProgress": "0.00",
            "translatedWordsProgress": "0.00",
            "pendingWordsProgress": "100.00",
            "orderType": "Hybrid",
            "fileInOrders": 1,
            "statusText": "available",
        }
    ],
    "first_page_url": "/?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "/?page=1",
    "next_page_url": null,
    "path": "/",
    "per_page": 10,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}

```

------------------------

## JSON order using API

> `POST: https://app.devnagri.com/api/order/json`

### Request

```json
{
    "api_key": "SECRET_API_KEY_XXXXX",
    "project_name": "My Sample Order",
    "industry": "sports",
    "source_language": "en",
    "target_language": [
        "hi",
        "bn"
    ],
    "data": [
        {
            "id": 1,
            "OriginalText": "Hello World"
        },
        {
            "id": 2,
            "OriginalText": "How are you?"
        }
    ]
}
```

### Response

```json
{
    "status": "success",
    "code": 200,
    "message": "Order placed successfully.",
    "order_id": "DEV00510"
}
```

#### Notes

1. This API is responsible to create order without platform interface using a secret API key.
2. After getting success response from the API, the user can then login to the [platform](https://app.devnagri.com/client/orders), and see the order.

### Request Parameters

| Key        | Value | Description
| ------------- |:-------------:|:-------------:|
| api_key | SECRET_API_KEY_XXXXX | The key will be provided by the Devnagri and can be found at [Usage Details](https://app.devnagri.com/account/usage) |
| project_name | My Sample Order | Name of the order |
| industry | sports | Type of industry/domain the order belongs to. Use "**Industry Name**" from [here.](Industries.md) |
| source_language | en | Language of the order which needs to be translated **from**. This will be a single value. [Ref.](LanguageCodes.md) |
| target_language | [hi, bn] | Language of the order which needs to be translated **to**. This will be inside an array, can contain more than one language. [Ref.](LanguageCodes.md) |
| data | Your JSON data | A valid JSON object |

## Translation API

This API is responsible for returning translation for the input sentence.

> `POST: https://app.devnagri.com/api/translateSentenceTest`

### Request

```cURL
curl --location --request POST 'https://app.devnagri.com/api/translateSentenceTest' \
--form 'key="recgdgstaDKtVpMIJQ"' \
--form 'sentence="Hello Devnagri"' \
--form 'src_lang="en"'
--form 'dest_lang="hi"' \
```

### Response

```json
{
    "translated_text": "हैलो देवनागरी"
}
```

#### Request parameters

The request requires input in the form data

| Key | Sample value | Description |
| -------------:|:-------------:|:-------------:|
| key | recgdgstaDKtVpMIJQ | Unique key assigned to user for the API usage |
| sentence | Hello Devnagri | Input text to be translated |
| src_lang | en | Source language code. [Ref](LanguageCodes.md). |
| dest_lang | hi | Destination language code. [Ref](LanguageCodes.md). |

## Transliteration API

This API is responsible for returning transliteration for the input sentence.

> `POST: https://app.devnagri.com/api/transliterate`

### Request

```cURL
curl --location --request POST 'https://app.devnagri.com/api/transliterate' \
--form 'input_text="नमस्ते"' \
--form 'src_lang="hi"' \
--form 'dest_lang="ml"' \
--form 'key="recgdgstaDKtVpMIJQ"'
```

### Response

```json
{
    "success": true,
    "at": "2022-06-30 12:20:39.823671 +0000 UTC",
    "input": "namaste",
    "result": "നാമസ്റ് റ്"
}
```

#### Request parameters

The request requires input in the form data

| Key | Sample value | Description |
| -------------:|:-------------:|:-------------:|
| input_text | नमस्ते | Input text |
| src_lang | hi | language code. [Ref](LanguageCodes.md). |
| dest_lang | ml | language code. [Ref](LanguageCodes.md). |
| key | recgdgstaDKtVpMIJQ | Unique key assigned to user for the API usage |

## Reject Sentence API

This API is responsible to reject the translation for the given sentences in an ongoing order.

> `POST: https://app.devnagri.com/api/order/json/reject`

### Request

```json
{
  "api_key": "recgdgstaDKtVpMIJQ",
  "order_code": "DEV04200",
  "data": {
      "hi": [
        "I think that we may safely trust a good deal more than we do.",
        "There's a world of good you could perform."
      ],
      "bn": [
        "There's a world of good you could perform.",
        "While he waited at the train station, Joe realized that the train was late."
      ]
  }
}
```

### Response

```json
{
    "status": "success",
    "code": 200,
    "message": "Order DEV04200 has been sent back for review."
}
```

#### Request parameters

| Key | Sample value | Description
| -------------:|:-------------:|:-------------:|
| api_key | recgdgstaDKtVpMIJQ | Unique key assigned to user for the API usage |
| order_code | DEV04200 | Order Code |
| data  | `{"lang_1": ["sentence_1", "sentence_2"], "lang_2": [...], ...}` | An array of sentences inside language code as key  |

## Custom Response API

This API is returns a custom response with source language and target language

> `POST: https://app.devnagri.com/api/order/json-response`

### Request

```json
{
    "api_keys": "recgdgstaDKtVpMIJQ",
    "order_id": "DEV04200"
}
```

### Response

```json
{
    "status": "success",
    "code": 200,
    "data": [
        {
            "id": "Thank you. Hi. I'd like to go to the Adelphi Hotel.",
            "hi": "धन्यवाद। हाय। मैं एडलफी होटल में जाना चाहता हूं।"
        },
        {
            "id": "Excuse me. - I'm sorry. This is my cab.",
            "hi": "माफ कीजिएगा। -मैं माफी चाहता हूं। यह मेरी कैब है।"
        }
    ]
}
```

#### Request parameters

| Key | Sample value | Description
| -------------:|:-------------:|:-------------:|
| api_keys | recgdgstaDKtVpMIJQ | Unique key assigned to user for the API usage |
| order_id | DEV04200 | Unique Order Code |
