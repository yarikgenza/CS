def longestCommonPrefix(strs):
    prefix = ""

    if len(strs) == 0:
        return ""

    if len(strs) == 1:
        return strs[0]

    # Sort the list to place a word with the smallest size to the first place
    def lenComparator(i):
        return len(i)

    strs.sort(key=lenComparator)

    for i in range(0, len(strs[0])):
        iChar = strs[0][i]

        shouldContinue = True

        for j in range(1, len(strs)):
            if strs[j][i] != iChar:
                shouldContinue = False
                break

        if shouldContinue == False:
            return prefix
        else:
            prefix += iChar

    return prefix


# print(longestCommonPrefix([]))
print(longestCommonPrefix(["flower", "flow", "flight"]))


#
# Runtime: O(N lonN) + O(N^2) => O(N * lonN + N ^ 2) => O(N^2)
#
#
