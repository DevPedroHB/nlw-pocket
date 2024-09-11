import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.locale(ptBR);

dayjs.extend(weekOfYear);

export { dayjs };
