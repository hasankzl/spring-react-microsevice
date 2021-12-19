package com.hospital.authservice.exception;

public class DuplicateUserException extends Exception {

    public DuplicateUserException(String errorMessage) {

        super();
    }
    public DuplicateUserException() {

        super("bu email e sahip bir kullanıcı bulunmaktadır");
    }
}
