import { pack } from "index";

function test() {
	return $tuple(1, 2, 3, "kek");
}

const [count, result] = pack(30, 31, 32, 54);

const [value1, value2, value3, value4] = result;
