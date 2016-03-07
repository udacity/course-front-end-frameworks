import re

is_correct = False

brace_regex = "{{.*}}"
color_regex = "(?:brick.)?color"
size_regex = "(?:brick.)?size"
price_regex = "(?:brick.)?price"

heading = widget_inputs["text1"]
brick_color = widget_inputs["text2"]
brick_size = widget_inputs["text3"]
brick_price = widget_inputs["text4"]
brick_description = widget_inputs["text5"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if heading == '':
    is_correct = True
else:
    commentizer("Do you think the heading should change if you use a different brick? Why would a different brick make the heading change?")

#check the brick's color matches a RegEx
if re.search( color_regex, brick_color ):
    if not re.search( brace_regex, brick_color ):
        is_correct = False
        commentizer("What you entered into the color field is correct, but it's still regular text. How do you create an expression in Angular?")
    else:
        is_correct = is_correct and True
else:
    is_correct = False
    commentizer("The color field is not correct.")

#check the brick's size matches a RegEx
if re.search( size_regex, brick_size ):
    if not re.search( brace_regex, brick_size ):
        is_correct = False
        commentizer("What you entered into the size field is correct, but it's still regular text. How do you create an expression in Angular?")
    else:
        is_correct = is_correct and True
else:
    is_correct = False
    commentizer("The size field is not correct.")

#check the brick's price matches a RegEx
if re.search( price_regex, brick_price ):
    if not re.search( brace_regex, brick_price ):
        is_correct = False
        commentizer("What you entered into the price field is correct, but it's still regular text. How do you create an expression in Angular?")
    else:
        is_correct = is_correct and True
else:
    is_correct = False
    commentizer("The price field is not correct.")

# if they're all unchecked
if not any([heading, brick_color, brick_size, brick_price, brick_description]):
    is_correct = False
    comments = []
    comments.append('At least one of these should be converted into an expression.\n\nLook at the data in the template and ask yourself, "Will this change if I use a different brick?" If the answer is yes, then enter the expression into the appropriate field.')


if is_correct:
    commentizer("Great job!")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
