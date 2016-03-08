email_client = widget_inputs["check1"]
blog_page_w_out_comment = widget_inputs["check2"]
contact_form = widget_inputs["check3"]
searchable_map = widget_inputs["check4"]
stock_ticker = widget_inputs["check5"]
blog_page_w_comments = widget_inputs["check6"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

if not email_client:
    is_correct = is_correct and False
    commentizer("An Email Client usually updates quite often, and can be read offline. Are frequent updates more of a server-side trait or a client-side one?")
else:
    is_correct = True

if blog_page_w_out_comment:
    is_correct = is_correct and False
    commentizer("If a blog doesn't have comments, then it's mostly just static content. Is there a benefit to making it an app that lives on the client side?")
else:
    is_correct = is_correct and True

if contact_form:
    is_correct = is_correct and False
    commentizer("Have you ever seen a contact form that updates often?")
else:
    is_correct = is_correct and True

if not searchable_map:
    is_correct = is_correct and False
    commentizer("If you wanted to change the location or zoom level of a map, would you want to wait for a full page refresh to see the new data?")
else:
    is_correct = is_correct and True

if not stock_ticker:
    is_correct = is_correct and False
    commentizer("If you were watching a stock ticker, would you want to refresh the page every time you wanted to get the updated information?")
else:
    is_correct = is_correct and True

# if they're all unchecked
if not any([email_client, blog_page_w_out_comment, contact_form, searchable_map, stock_ticker, blog_page_w_comments]):
    is_correct = False
    comments = []
    comments.append("All of these should be client-side apps. No wait, I mean server-side ones. Some should be client-side while others should be server-side...but which ones?!? Who will solve this mystery?")

if is_correct:
    commentizer("Great job! Remember that an app that updates frequently, or without a page refresh, should most likely be a client-side app.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
