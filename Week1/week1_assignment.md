## 1. Shared testing activities

> 1. User can't see its new article in `Your Feed` section.
>
> 2. Although user enters a tag input while publishing a new article, it doesn't appear on the article.

## 2. Unique testing activities

Desktop

> 1. After selecting a popular tag, if you visit a component from `Navbar` and go back to `Home` component, the previous selected tag still stays active, however, the article list doesn't display any article.
>    (see below image)  
>    <img src="https://i.ibb.co/b5f12Hs/active-tag-bug.png" width="70%">
>
> 2. When user selects a popular tag, pagination is not calculated according to that limited tag data but to the all articles. ( e.g. for the `Gandhi` tag, it should be only 1 page but there are 50 pages in the pagination class.
>
> 3. When user deletes comment, he/she needs to refresh the page to remove it on UI.
>
> 4. There are duplicated tags and empty tags.

Mobile

> 1. On `Global Feed` section, when user clicks on publisher's name and moves to its `Profile` component, he/she can see articles in `My Articles` or `Favorited Articles`. However, if user refreshes the page with a `pull-to-refresh` gesture, even though he/she stays in the same component, the article list becomes empty and it doesn't display any article. (see below images for before and after)  
>    <img src="https://i.ibb.co/q9dLy2b/articles-profile1.jpg" width="20%"> ... <img src="https://i.ibb.co/ZSDxdPx/articles-profile.jpg" width="20%">
>
> 2. There is a redundant right-margin in the articles. It covers almost half of the area and blocks the article content.
>    (see below image)
>    <img src="https://i.ibb.co/h28PKVL/article-margin.jpg" width="30%">
