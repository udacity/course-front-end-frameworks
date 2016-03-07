is_correct = False

router = widget_inputs["check1"]
template = widget_inputs["check2"]
service = widget_inputs["check3"]
controller = widget_inputs["check4"]
module = widget_inputs["check5"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if not router:
    is_correct = is_correct and False
    commentizer("A router is needed for a number of reasons, but the most important reason is to manage the application's state via the URL. Does this feature need a specific page?")
else:
    is_correct = True

if not template:
    is_correct = is_correct and False
    commentizer("Is anything going to display visually? Yep! Which component is used to house the feature's HTML?")
else:
    is_correct = is_correct and True

if not service:
    is_correct = is_correct and False
    commentizer("Remember that services let different parts of the app share data? Will this feature be sharing data with other parts of the app?")
else:
    is_correct = is_correct and True

if not controller:
    is_correct = is_correct and False
    commentizer("This feature will need to know some information about which items are saved for later. Which component provides data to a template?")
else:
    is_correct = is_correct and True

if module:
    is_correct = is_correct and False
    commentizer("Modules help organize and package together a lot of functionality. There's no need to create an entirely new module just for this little feature. Since our app already has a module, we'll just add to that one. ")
else:
    is_correct = is_correct and True

# if they're all unchecked
if not any([router, template, service, controller, module]):
    is_correct = False
    comments = []
    comments.append("It would be *awesome* if we didn't need any of these and things would just magically work. Unfortunately, that's not the case!\n\nThink about what each of these components does - which one(s) are needed to achieve this functionality?")

if is_correct:
    commentizer("Great job! There are a number of moving parts to Angular, so it's good to have a firm grasp on the responsibilities of each.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct
