"""print class tree for given obj"""
def hierarchy(obj):
    my_type = type(obj)
    while True:
        print(my_type)
        t = my_type.__bases__

        """<class 'object'>.__bases__ is an empty tuple, so break out of loop"""
        if not t:
            break
        my_type = t[0]