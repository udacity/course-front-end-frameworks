is_correct = False

port_alias = widget_inputs["check1"]
new_alias = widget_inputs["check2"]
help_alias = widget_inputs["check3"]
generate_alias = widget_inputs["check4"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if not port_alias:
    is_correct = is_correct and False
    commentizer("Did you look through the Ember-CLI's help information?")
else:
    is_correct = True

if new_alias:
    is_correct = is_correct and False
    commentizer("Hmm, I couldn't find `n` as a shortcut for `new`. Are you sure that's accurate?")
else:
    is_correct = is_correct and True

if not help_alias:
    is_correct = is_correct and False
    commentizer("This one's easy to test; try running `ember --help` and then `ember help` on the command line. Did you get the same output?")
else:
    is_correct = is_correct and True

if generate_alias:
    is_correct = is_correct and False
    commentizer("Generate does have an alias!...but are you sure this is the right one?")
else:
    is_correct = is_correct and True

# if they're all unchecked
if not any([port_alias, new_alias, help_alias, generate_alias]):
    is_correct = False
    comments = []
    comments.append("Some, maybe all, of these are correct. Why don't you check the ember website or poke around in the output from the `ember` command to see if you can figure out which one(s) are correct aliases.")

if is_correct:
    commentizer("Great job! Aliases are extremely helpful, and professionals use them religiously! If you really want to get better in Ember, learn the aliases so you can be more efficient.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
