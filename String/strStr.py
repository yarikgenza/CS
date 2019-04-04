#
# Return index of first substring occurence
#


def strStr(haystack, needle):
    if len(needle) == 0:
        return 0

    for x in range(0, len(haystack)):
        if haystack[x] == needle[0]:
            if haystack[x : x + len(needle)] == needle:
                return x
    return -1


print(strStr("hello", "ll"))


# Time complexity: 0(N); space complexity: O(N);
