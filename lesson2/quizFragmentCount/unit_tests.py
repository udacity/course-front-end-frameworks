import re

is_correct = False

loadUrl_regex = "loadurl"
checkUrl_regex = "checkurl"

num_times_called = widget_inputs["text1"]
methods_called = widget_inputs["text2"].strip().lower()

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if not num_times_called in [2, '2', 'two', 'Two', 'TWO', 'tow', 'two times', 'twice']:
    is_correct = is_correct and False
    commentizer("Hmmm, that's not the number I ended up with. Try working your way through `Backbone.History.checkUrl`'s code.")
else:
    is_correct = True

# are the methods correct?
if re.search( checkUrl_regex, methods_called ) and re.search( loadUrl_regex, methods_called ):
    is_correct = is_correct and True
else:
    is_correct = is_correct and False

    if re.search( checkUrl_regex, methods_called ):
        commentizer("`checkUrl` is one of the correct methods, but it's not the only one. Keep looking!")
    elif re.search( loadUrl_regex, methods_called ):
        commentizer("`loadUrl` is one of the correct methods, but it's not the only one. Keep looking!")
    else:
        commentizer("The methods box is not correct. Try working your way through `Backbone.History.checkUrl`'s code.")

if is_correct:
    commentizer("`Backbone.History.start` sets the stage for when a URL changes. But it is `checkUrl` that's in charge of these changes.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
