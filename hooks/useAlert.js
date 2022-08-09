import { useContext } from 'react';
import {AlertContext} from '../providers/alert_provider';

const useAlert = () => useContext(AlertContext);

export default useAlert;