--!strict
--!native
--!optimize 2

--[[
	Packs a number of arguments into a table and returns its length.

	Used to cajole varargs without dropping sparse values.
]]
local function pack(...)
	return select("#", ...), { ... }
end

--[[
    Returns first value (success), and packs all following values.

    This function will not throw an error in case the `success` argument was not a boolean at the runtime.
]]
local function packResult(success: boolean, ...): (boolean, number, { unknown })
	return success, select("#", ...), { ... }
end

local exports = {
	pack = pack,
	packResult = packResult,
}

return exports
