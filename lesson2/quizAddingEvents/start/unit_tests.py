import re

box1_correct = False
box2_correct = False

purchase_regex = "jack.on\(\s*[\'\"]\s*(?:birthday|party|presents) (?:birthday|party|presents) (?:birthday|party|presents)\s*[\'\"]\s*,\s*purchase\);?"
build_regex = "jack.on\(\s*[\'\"]\s*presents\s*[\'\"]\s*,\s*build\);?"

purchase_regex_taken = False
build_regex_taken = False

textBox1 = widget_inputs["text1"]
textBox2 = widget_inputs["text2"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

# is box one correct?
if re.search( purchase_regex, textBox1 ) or re.search( build_regex, textBox1 ):
    box1_correct = True

    # does it have the purchase code
    if re.search( purchase_regex, textBox1 ):
        purchase_regex_taken = True

    # does it have the build code
    if re.search( build_regex, textBox1 ):
        build_regex_taken = True
else:
    commentizer("The first textbox is not correct.")

# is box two correct?
if (re.search( purchase_regex, textBox2 ) and not purchase_regex_taken) or (re.search( build_regex, textBox2 ) and not build_regex_taken):
    box2_correct = True

    # does it have the purchase code...not used right now, though
    if re.search( purchase_regex, textBox2 ):
        purchase_regex_taken = True

    # does it have the build code...not used right now, though
    if re.search( build_regex, textBox2 ):
        build_regex_taken = True
else:
    commentizer("The second textbox is not correct.")

if box1_correct and box2_correct:
    commentizer("Backbone makes it easy to monitor multiple events by just passing a space-separated string of events to `Backbone.on`.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = box1_correct and box2_correct
