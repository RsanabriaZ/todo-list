import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react'


describe('Pruebas en el form.tsx', () => {

    let component: RenderResult
    const mock = jest.fn();

    test('Debe llamar al botón de guardar', () => {
        const btnGuardar = component.getByText('Guardar')

        btnGuardar.addEventListener('click', mock)
        fireEvent.click(btnGuardar)

        expect(mock).toBeCalled();
    })

    test('Debe llamar al botón de cancelar', () => {
        const bntCancelar = component.getByText('Cancelar')

        bntCancelar.addEventListener('click', mock)
        fireEvent.click(bntCancelar)

        expect(mock).toBeCalled();
    })


})