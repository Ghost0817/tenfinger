package com.tw.bicheech.common.model;

import com.tw.bicheech.common.model.Errors;

import java.util.List;

public class ResultData {

    private boolean isValid;
    private List<Errors> errors;

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }

    public List<Errors> getErrors() {
        return errors;
    }

    public void setErrors(List<Errors> errors) {
        this.errors = errors;
    }
}
