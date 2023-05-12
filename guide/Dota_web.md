# DOTA Web

Devnagri On the Air is a platform that translates your website on the fly.

The platform enables your website to go multilingual in minutes, without any hassle. You don't need to change anything at the code and infrastructure level. Its just a plug and play solution to go multilingual.

Devnagri On The Air makes your multilingual journey quick and easy.

![DOTA](./images/DOTA_Web/DotaWebIntro.png)

## Login Page

User has to provide the login id and password and click on Log In.

![signin](./images/Log_In.png)

## User Dashboard

User will be taken on his/her dashboard. He/She can choose to place a new Website Translation order.

![dashboard](./images/UserDashboard.png)

## New Order on DOTA

1. User needs to enter the URL of his website which needs to be localised.
2. Select the pricing plan.
3. Select the duration.

![neworder](./images/DOTA_Web/NewDOTAOrder.png)

## Order Summary

![order_summary](./images/DOTA_Web/OrderSummary.png)

## Payment

User will redirect to the payment page and choose any payment method for the transaction and confirm the order.

![payment](./images/DOTA_Web/Payment.png)

Order gets confirmed and page will navigate to the verify website ownership page.
<!-- ![l](./images/a1.png) -->

## Order Confirmation

If existing user has balance in wallet, the order will get confirmed and you will redirect to the verify website ownership page.

If new user does not have any credits, it will redirect to the payment page and then to the verify website ownership page.

## Verify Website Ownership

Sign in to your domain name provider and add the generated TXT record for you into your [DNS Configuration](https://www.youtube.com/watch?v=K1B5UwSBwko).

![domain_verify](./images/domain_verify.png)

Click on **verify** and then it will take up few minutes for verification.

## Select approach

1. Subdomain (hi.example.com)
2. Live JS (example.com)

![setup](./images/DOTA_Web/Setup.png)

### 1. Subdomain

Step 1.

![subdomain_step1](./images/DOTA_Web/SubdomainStep1.png)

**a.** Please enter the CNAME entries generated for you in your DNS record.

Note: If you are using CDN, you need to disable proxy on Cloudflare.

If you are using GoDaddy or Cloudflare you can see how to do it in the videos below:

[GoDaddy](https://www.youtube.com/watch?v=M47Lpp5f9lE)
<br>

[Cloudflare](https://www.youtube.com/watch?v=sCuEqr4MHKM)

Click on **Verify CNAME** and after verification the red cross should become green tick after a few minutes.

Devnagri is currently initializing your subdomains. Please be patient while the process completes.

**b.** To apply SSL on localised website, add below CNAME record to your DNS service provider. 
Click on **Verify SSL** to verify this step.

Step 2.

![subdomain_step2](./images/DOTA_Web/SubdomainStep2.png)

It is recommended that you include the Javascript code snippet immediately before your closing body tag. This will enable the language switcher to appear on your website, as well as add hreflang tags to notify Google of the different variations of the same page and prioritize indexing of these pages. This is particularly beneficial for your SEO efforts.

Once its done, you can click on **Finish** and you're done!

Step 3.

![subdomain_step3](./images/DOTA_Web/SubdomainStep3.png)

Your project has been created. Now, you can go to DOTA dashboard by clicking on **Go to my dashboard**.

### 2. Live JS

Step 1.

![liveJS1](./images/DOTA_Web/LiveJS1.png)

You're welcome to adhere to the guidelines and include the Javascript code snippet immediately before your closing body tag. This will enable the language switcher to appear on your website.

Step 2.

![liveJS2](./images/DOTA_Web/LiveJS2.png)

Your project has been created. Now, you can go to DOTA dashboard by clicking on **Go to my dashboard**.

<!-- ## DOTA Dashboard  

After confirming the order all the URLs will the not download automatically user has to click on add urls.

![urln](./images/a12.png) -->

## DOTA dashboard

User dashboard shows all the details of order placed for a domain.

1. Website name
2. Languages
3. URLs
4. Status
5. Plan
6. Publish
7. Progress
8. Valid Till
9. Page Views
10. Word Count

![dashboard](./images/DOTA_Web/DotaDashboard.png)

<!-- ## Plan details

User will see the plan details.
ex  Languages,Urls,Plan,Progress,word count,pages view.

![plan](./images/Dotaactiveplandetails.png) -->

## URLs tab

![wordcount](./images/DOTA_Web/URLs.png)

## Progress  

If all the URLs translated by system then the progress will show 100% on the dashboard.

## Add URLs

If system did not crawl any url due to some technical issue or user want only one particular URL to be translated so user can provide the URL and translate the page.
Upon clicking on the add URLs page will redirect to the next page.

![url_status](./images/DOTA_Web/URLStatus.png)

## URL sync again button

Upon clicking on the Sync again button all the URLs will sync and will display on the screen.

<!-- ![sync](./images/a3.png) -->

## Translate button

Click on the translate button URLs will be loaded to the DOTA dashboard.

<!-- ![tran](./images/translate.png) -->

## Don't have URL

If system not crawling all the URLs user can click on the click here button and add URLs manually.

<!-- ![Donthave](./images/clickurl.png) -->

## Upload files

User has to update all the URLs in the file and click on the upload button.

![upload_files](./images/DOTA_Web/AddUrlUploadFiles.png)

## Paste URLs

User can use this tab by pasting individually URLs. to crawl.

![paste_urls](./images/DOTA_Web/AddUrlPasteUrl.png)

## Words

This shows word count - how many words are in the URL.

## Translation Type

This shows translation type of URLs - MT,PT,HT.

### Machine Translation

The translation done by machine.

### Human Translation

As user want to translate URL him self by using proof read option.  

### Premium Translation

<!-- ![translator](./images/a14.png) -->

## Created On

Shows the date on which the URL was created.

## Updated On

Shows the date on which the URL was updated with some new content.

## Action

### Preview

User can view the translated URL of the particular language.

<!-- ![preview](./images/a15.png) -->

### Proof Read/Translate

Click on proof read tab.

Proof read shows  all the sentences of the URL along with the translation.

User can also do modification of the sentences.

<!-- ![pf](./images/a16.png) -->

![proofread](./images/Toggledota.png)

## Published

Only published links are shown as translated.
We don't translate unpublished URLs.

![ative](./images/a17.png)

## Search Tab

User can search any URL in the search button.

![search](./images/DotaSearchbutton.png)

## Update URL

![urlupdate](./images/URLupdates.png)

## Add more language

![morelanguage](./images/Addmorelanguage.png)

![morelanguage1](./images/Addmorelanguage1.png)

## Delete tab

We can delete the URLs by using the delete button.

![RR](./images/a18.png)

## Change language dropdown filter button

User can see all the progress of the translated URLs

in the particular language.

![PT](./images/Dotalanguageupgradeplan.png)

## Filter Button

User can use the filter button to search for Active/Inactive, Translation type, URls.

![filter](./images/a19.png)

## Publish

Enable translation for the domain.

## Language Switcher

User can add the following script to display the language switcher on your website.

![language_switcher](./images/DOTA_Web/LanguageSwitcher.png)

## Custom CSS

You can use Custom CSS to customize the positioning of Language Switcher Dropdown.
Recommendation: Please use combination of (right and bottom) or (left and bottom) and rest field is empty for better dropdown position.

![dropdown_position](./images/DOTA_Web/CustomCSS.png)

## Settings

Language dropdown on your website
Recommendation : if you are using custom dropdown, please disable both the options.

![publish_settings](./images/DOTA_Web/PublishSettings.png)

### Subdomain Redirect

If you are using Devnagri language dropdown, you need to "ON" the settings. This will help you populating a dropdown on your proxy website. This option will work only after you have added the CNAME successfully.
Recommended: if you are not using your default language dropdown.

### Language Dropdown UI

Enabling This will help you populating an automatic language dropdown on your proxy website.

### Automatic Translations

If this is toggled to ON then any new URL that comes into the system automatically is marked ACTIVE and localised.
If this is toggled to OFF then any new URL that comes into the system automatically is marked INACTIVE and NOT localised. The user is taken to the parent site when he tried to access this new URL.

### Static Content Website

This settings for if your website has static content then enabling this would speed up the content localisation.

## SSL Certificate CNAME

Please include the CNAME that has been generated for your localized website.

![SSL_certificate](./images/DOTA_Web/SSLCertificate.png)

## Subdomain

You can active subdomains for language with the CNAME.

![subdomain](./images/DOTA_Web/Subdomain.png)

## Page Views

Here, the user can see no. of visitors for each URL and language.

![pageview](./images/DOTA_Web/PageViews.png)

### Total Views

Total Views has the total no. of visitors on your localised website.

## Premium Translation Tab

User can see all the Premium translation orders on this page.

![PTOrder](./images/DOTA_Web/PTOrder.png)

## Order for Premium Translation

Upon clicking 'Order for Premium Translation', you will be redirected to the page where you can select the URLs for which you want to create Premium Translation order. Click on 'Next' after selecting the URLs and you will land on 'Create Order' page.

![PT_order_urls](./images/DOTA_Web/PTOrderSelectURLs.png)

## Create Order

This is where the user can create order by filling all the details.

![Ordersucess](./images/Ordersuccess..png)

## PT orders will reflect on orders page and PT

The list of PT orders will be shown under orders page as type DOTA and Premium translation page of DOTA dashboard.

![ordersummary](./images/DotaOrderconfirmedPT.png)

![ptorder](./images/orderpdota.png)

## Translate Button

![PTtranslate](./images/DotaPTtranslate.png)

## Translate Page

In this page user can see many option and toggle button.

Order type,

Order Industry,

Level of Politeness.

Sorting.

Jump to segment.

Language.

Link.

Duplicate words.

No.of words in the page.

![toggle](./images/Dotatoggle.png)

## Toggle Controls

Upon clicking on toggle button the toggle will hide all the button present on the bottom of the page.

![toggle](./images/toggle1.png)
![tg](./images/toggle2.png)

## Keyboard Shortcuts

![glossary](./images/Dotaglossary.png)

## Instructions

This shows the instructions given at the order creation time.

![instruction](./images/Dotainstructions.png)

![font](./images/Dotafont.png)

## Description on Translate Page

## Save Translation

User/Translator can save a particular segment after making any changes by clicking on the save translation button.

![save](./images/single.png)

## Add Comment

User can add comment on the translation of any segment.

![addcomment](./images/Addcomment.png)

## Revision History

The Revision History feature allows users to review the complete history of changes made to a particular segment.

![revision](./images/Revisionhistory.png)

## Accept Translation

Reviewers can accept the translations done by translators by clicking on this button.

## Reject Translation

Reviewers can reject the translations done by translators by clicking on this button.

![reject](./images/Reject.png)

## Accept/Reject All

Reviewers can accept/reject all segments at once from here.

![allinks](./images/second.png)

## Filter By

User can filter all the segment by using the options such as Translated, Untranslated, Accepted, Rejected, Commented, Duplicates etc.

![sort](./images/Sort.png)

## Jump to Segment

User can enter any segment number in the search box and click on **Go** button to jump to that segment number on the page.

![jumptosorting](./images/jump.png)

## Autofill MT

## Preview

## Settings

### Caching

### Custom Purge

### URLs Purge

Used to purge the cache of URLs. <br>
Limit - 5 URLs at a time, one per line.

![purge_url](./images/DOTA_Web/PurgeURL.png)

### Folder/Prefix Purge

Used to purge all the URLs of mentioned folder. <br>
Limit - One folder at a time.

![purge_folder](./images/DOTA_Web/PurgeFolder.png)

### Domains

Purge all cached files of domains.

![purge_domain](./images/DOTA_Web/PurgeDomain.png)

### Purge Settings

Purge settings data so that changes done for the localised website get reflected.

![purge_settings](./images/DOTA_Web/PurgeSettings.png)

### Merge and Block

### Merge Folders

To merge msite or amp folders so that they do not show up repeatedly in the system. <br>
Please add comma seprated folder names. eg:- amp,msite etc.

![merge_folders](./images/DOTA_Web/MergeFolder.png)

### Blocked Keywords/URLs

For preventing blocked URLs to store in system. <br>
Please delete the malformed URLs once after adding them in the block list.

![blocked_keywords](./images/DOTA_Web/BlockedKeywords.png)

### Exclude Block

Mention class or div that you do not want to translate.

![exclude_block](./images/DOTA_Web/ExcludeBlock.png)

### Robots.txt

Please check the syntax and ensure you upload correct robots.txt.

![robots.txt](./images/DOTA_Web/Robots.png)

### Object Mapping

An image on the main site will be replaced by the localised image by providing the URLs of the images.

- English URL -  has the image url of the main site.
- Language - select the localised language.
- Localised URL - has the image url that is to be put on the localised site.

Note:- This feature can be used for images, docs, ppts etc.

![object_mapping](./images/object_mapping.jpeg)

### Iframes

Specify iframe IDs that you want to localise. <br>
Limit - Mentioned iframes should exist across the site.
Please add comma separated iframe ids, for eg:- iframeid1, iframeid2 etc.

![iframes](./images/DOTA_Web/Iframes.png)

### Hreflang Tags

Please add hreflang tags in your source code. These tags let Google know you have different versions of the same page and favor indexing of these pages. You can find these hreflang tags in the head tag of your website source code.
Note that with this method, you don't need to edit your sitemap.

![hreflang_tags](./images/DOTA_Web/HreflangTags.png)


<!-- ## Rule

 Some words which never translate or translate as given words.
![rule](./images/rule1.png)

## Never Translate

If User do not want to translate any word we should create a rule upon updating never translate button.
![acer](./images/acer.png)

## Always Translate  

If User wants to translate any particular word he can create a rule for always translate.

![never](./images/never.png) -->

## Purge Cache

### 1. Clear Cache of a Single URL

> **POST 'https://dota-web-api.devnagri.com/api/purge-cache-url'**

```json
{
    "api_key" : "abcdefghijk_xxx",
    "url" : "https://fourtek.com/"
}
```

#### Request Parameters

The request requires input in the json data

| Key | Sample value | Description |
| -------------:|:-------------:|:-------------:|
| api_key | abcdefghijk_xxx | API Key |
| url | "https://fourtek.com/" | URL for purging |

### 2. Clear Cache of Complete Domain

> **POST 'http://localhost:8081/api/purge-cache-url'**

```json
{
    "api_key" : "abcdefghijk_xxx",
    "isDomainWise" : true
}
```

#### Request Parameters

The request requires input in the json data

| Key | Sample value | Description |
| -------------:|:-------------:|:-------------:|
| api_key | abcdefghijk_xxx | API Key |
| isDomainWise | true | This as **true** will purge the complete domain for this API key |
