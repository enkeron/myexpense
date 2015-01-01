package org.myexpense.model;

import java.sql.Date;

/**
 * Created by enkeron on 01.01.15.
 */
public class Expense {
    private int expId;
    private double amount;
    private Date expDate;
    private String expNote;
    private int expCatId;
    private int userId;

    public Expense(int expId, double amount, Date expDate, String expNote, int expCatId, int userId) {
        this.expId = expId;
        this.amount = amount;
        this.expDate = expDate;
        this.expNote = expNote;
        this.expCatId = expCatId;
        this.userId = userId;
    }

    public Expense(int expId, double amount, String expNote, int expCatId, int userId) {
        this.expId = expId;
        this.amount = amount;
        this.expNote = expNote;
        this.expCatId = expCatId;
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Expense{" +
                "expId=" + expId +
                ", amount=" + amount +
                ", expDate=" + expDate +
                ", expNote='" + expNote + '\'' +
                ", expCatId=" + expCatId +
                ", userId=" + userId +
                '}';
    }

    public int getExpId() {
        return expId;
    }

    public void setExpId(int expId) {
        this.expId = expId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getExpDate() {
        return expDate;
    }

    public void setExpDate(Date expDate) {
        this.expDate = expDate;
    }

    public String getExpNote() {
        return expNote;
    }

    public void setExpNote(String expNote) {
        this.expNote = expNote;
    }

    public int getExpCatId() {
        return expCatId;
    }

    public void setExpCatId(int expCatId) {
        this.expCatId = expCatId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
