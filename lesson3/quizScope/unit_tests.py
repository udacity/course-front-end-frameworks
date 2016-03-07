is_correct = False

num_watchers = widget_inputs["text1"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if num_watchers in [6, '6', 'six', 'Six', 'SIX']:
    commentizer("Very close! There are 6 expressions in the template, that's correct. Take a look at the expressions again and think if Angular really need to have a watcher for each one?")

if num_watchers in [5, '5', 'five', 'Five', 'FIVE']:
    is_correct = True
else:
     commentizer("That's not the same number of watchers that I ended up with.")

if num_watchers == "":
    is_correct = False
    comments = []
    comments.append("C'mon, give it a shot! At least enter *something* :-)")

if is_correct:
    commentizer("Great job!")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
