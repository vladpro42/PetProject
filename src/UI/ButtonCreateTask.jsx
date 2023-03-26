import React from 'react';
import { useTranslation } from 'react-i18next';

const CreateNewTask = ({ onClick, className }) => {
    const { t } = useTranslation();

    return (
        <button onClick={onClick} className={className}>{t("Create a new Task")}</button>
    );
};

export default CreateNewTask;