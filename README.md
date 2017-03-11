[<img src="./images/0SquadLogo.png"/>](https://github.com/0Squad)

# 0Squad Merch
An E-Commerce app that allows users to purchase our squad's merchandise.

- [Visit our website!](0squad.github.io/0squadmerch)
- [Back-end Repo](https://github.com/0Squad/0squadmerch-api)
- [link to wireframes](https://goo.gl/photos/si3vrGCq6B87UXFg8)

## Approach and team process

We began our process by discussing how exactly we wanted to structure our website-- which parts would use the API, how much we wanted the front end to do, etc. As discussed on our [back-end repo](https://github.com/0Squad/0squadmerch-api), we did not code separately for the first two days. This allowed us to have enough knowledge about both the front-end and the back-end to begin splitting off on the third day. Each morning during our stand-up we would talk about our schedule and goals we wanted to hit for the day. Typically we had one goal for lunch and one for the end of the day. We agreed to leave GA by 7:00pm at the latest every day, ensuring that each member stayed alert and did not lose sleep over the project. This allowed us to work efficiently during project hours.

In terms of work flow and structure, we utilized our internal issue queue and projects tab on GitHub. We mainly filed issues as "notes to self" before we hit requirements. The projects tab was especially helpful towards the end of the project, as we would discover bugs before leaving one night. We were able to mimic a Trello board and save notes of our bugs in a "TO-DO" column and move them to a "COMPLETED" column as we fixed each bug.

## Limitations

Initially, we wanted our *DELETE* function to delete an item from the order each time someone removes a product. However, we quickly realized that *DELETE* would delete the entire order, so we would have to constantly *POST* every time we did that. After a group discussion, we decided it would be DRYer to have our *POST* happen on "checkout" rather than on "add to cart". This allowed us to separate concerns and not rely on a single button to do *POST*, *PATCH*, and *DELETE* depending on a given situation.
We changed our *DELETE* function to be an option for users if they wanted to delete an old order from their order history.

We also had a discussion about *PATCH* in regards to when a user clicks "checkout" but changes their mind before paying. We edited the back-end `update` controller function to mimic `create` to add flexibility with our checkout.

## Connecting to the back-end

Our front-end saves a user's cart onto local storage, so the order does not actually get created until the user decides to checkout. When this happens, our app sends a *POST* request using the stored items in the local cart as our items array, with a completed status as `false`. When a user decides to pay, our `createCharge` function checks to see if an order that has not been paid exists. If there was a change in the order between "checkout" and "pay", `createCharge` updates the order.
Once the order has been successfully paid, our app sends a *PATCH* request updating the completed status as `true`.

## Future goals

We would like to be able to see products and add to cart before signing in. If a user tries to purchase an item before signing in, the app would make them create an account/sign in.

## User Stories:
### Users can:
- Create account
- Sign in
- Change password
- See all products
- Select one product
- Add products to cart
- See cart
- Edit/ delete items in cart
- Purchase items
- See order history
- Sign out

### Users canNOT:
- See other users’ carts
- Add things to other users’ carts
- Purchase stuff under other users
- Create items

### Reach goals:
- Users can search for a specific item
- Users can recreate past orders
- Users can favorite an item
- Users can comment/review an item
- Users can share an item to social media
- Users can NOT enter a fake email address

### Technologies used:
- JavaScript
- HTML/SCSS
- jQuery
- [Stripe](https://stripe.com/)
