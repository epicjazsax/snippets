"""return a string (from a list) separated by commas, with and/or before last item"""
def pretty_list(mylist, or_operator=False):
    if len(mylist) >= 0:
        one = f"{', '.join(mylist[0: -2])}"

        """when 'or' is false, use 'and' instead"""
        if or_operator:
            operator = 'or'
        else:
            operator = 'and'

        """if not one- handles lists size 0-2"""
        if not one:
            two = f' {operator} '.join(mylist[-2:])
            return two
        else:
            two = f', {operator} '.join(mylist[-2:])
            return f'{one}, {two}'