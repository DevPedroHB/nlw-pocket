import dayjs from "dayjs";
import "dayjs/locale/pt-BR";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.locale("pt-BR");

dayjs.extend(weekOfYear);

export { dayjs };
