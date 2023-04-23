"""print base classes for given class or list"""

def class_hierarchy_set(thing):
    if type(thing) is not type:
        thing = type(thing)
    h = {thing}
    the_bases = thing.__bases__
    for b in the_bases:
        h.update(class_hierarchy_set(b))
    return h


"""print class tree for given class or list"""
def class_hierarchy_tree(thing):
    if type(thing) is not type:
        thing = type(thing)
    h = [thing]
    the_bases = thing.__bases__
    for b in the_bases:
        h.append(class_hierarchy_tree(b))
    return h